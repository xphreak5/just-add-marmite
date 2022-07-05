import { createClient } from "contentful"
import RecipeCard from "../components/RecipeCard"

export const getStaticProps = async () => {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "recipe" })
  console.log(res)

  return {
    props: {
      recipes: res.items,
      revalidate: 1
    }
  }

}


export default function Recipes({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe}/>
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          place-items: center;
          grid-template-columns: 1fr 1fr;
          grid-gap: 30px 60px;
        }
      
      `}</style>
    </div>
  )
}