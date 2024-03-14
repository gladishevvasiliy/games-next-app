import { fetchData } from "@/entries/game/api/fetch-data"
import { gameByName } from "@/entries/game/helpers/game-by-title"
import { Card } from "@/entries/game/ui/card/card"
import { Params, PathItem } from "@/shared/types"

export default async function Page({ params }: { params: Params }) {
  const data = gameByName(await fetchData(), params.seo_title)

  if (!data) {
    return <h1>Game not found</h1>
  }

  const { title, provider, categories, identifier } = data
  return (
    <Card title={title} provider={provider} categories={categories} identifier={identifier} />
  )
}

export async function generateStaticParams() {
  const games = await fetchData();

  return games.reduce((acc, item) => {
    const { provider, seo_title, categories } = item

    acc.push({
      params: { section: provider, seo_title: seo_title },
    })

    categories.forEach(category => acc.push({
      params: { section: category, seo_title: seo_title },
    }))

    return acc
  }, [] as PathItem[])
}