import manifest from '../generated/images.json'

/* ----------------------------------------------------------------------------
 * Picture — responsive images with no layout shift.
 *
 * Reads src/generated/images.json (written by scripts/responsive-images.mjs)
 * to emit AVIF + WebP srcsets and, crucially, explicit width/height on the
 * <img>. Nothing in the codebase had intrinsic dimensions before, which is
 * where the CLS was coming from.
 *
 * If a source is missing from the manifest it degrades to a plain <img> with
 * the original src, so this can be adopted one call site at a time.
 *
 * `alt` is required and passed straight through — alt text is content, owned
 * by the copy team, and this component never invents or alters it.
 * -------------------------------------------------------------------------- */

type Variant = { w: number; h: number; src: string }
type Entry = { w: number; h: number; ratio: number; avif: Variant[]; webp: Variant[] }

const IMAGES = manifest as unknown as Record<string, Entry>

type Props = {
  /** Original path as it appears in the repo, e.g. "/hero.webp". */
  src: string
  alt: string
  /** The `sizes` attribute. Get this right — it decides which variant loads. */
  sizes?: string
  className?: string
  /** Class applied to the <img> itself (the <picture> wrapper takes className). */
  imgClassName?: string
  /** Set true for the LCP image only: eager + high priority, never lazy. */
  priority?: boolean
  /** Override the intrinsic ratio when the image is cropped by object-fit. */
  width?: number
  height?: number
  style?: React.CSSProperties
  draggable?: boolean
}

const srcset = (list: Variant[]) => list.map((v) => `${v.src} ${v.w}w`).join(', ')

export default function Picture({
  src,
  alt,
  sizes = '100vw',
  className,
  imgClassName,
  priority = false,
  width,
  height,
  style,
  draggable,
}: Props) {
  const entry = IMAGES[src]

  /* Not generated yet — fall back to the original file. Still gets explicit
     dimensions if the caller supplied them. */
  if (!entry) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imgClassName ?? className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        style={style}
        draggable={draggable}
      />
    )
  }

  /* Largest variant is the <img> src, so a browser without srcset support
     still gets a sensible file. */
  const largest = entry.webp[entry.webp.length - 1]

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcset(entry.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcset(entry.webp)} sizes={sizes} />
      <img
        src={largest.src}
        alt={alt}
        width={width ?? entry.w}
        height={height ?? entry.h}
        sizes={sizes}
        className={imgClassName}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        style={style}
        draggable={draggable}
      />
    </picture>
  )
}

/** The manifest entry for a source, for callers that need the ratio. */
export function imageMeta(src: string): Entry | undefined {
  return IMAGES[src]
}
