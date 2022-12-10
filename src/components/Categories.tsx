import { Link } from "react-router-dom"

interface CategorieProps {
  title: string;
  imageUrl: string;
  link: string;
}

export function Categories(props: CategorieProps) {
  return (
    <div className="flex flex-col">
      <div>
        <img className="w-32 h-32" src={props.imageUrl} alt="" />
      </div>
      <div>
        <h2 className="text-red-400">{props.title}</h2>
      </div>
      <div>
        <Link to={props.link}>
          <button>Conhecer</button>
        </Link>
      </div>
    </div>
  )
}

export default Categories;