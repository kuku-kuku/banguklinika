import { Helmet } from 'react-helmet-async'
export default function SEO({ title, description }: { title: string; description?: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="theme-color" content="#0d76d6" />
    </Helmet>
  )
}
