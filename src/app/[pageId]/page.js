import { pageInfo } from "../../assets/data";

export default function page({ params }) {
  const id = params.pageId;
  const pageContent = pageInfo.find(pi=>pi.id===id)

  return (
    <div>
      <h2 className="text-[2em]">{pageContent.pageTitle} </h2>
      <p>{pageContent.description} </p>
      <p>
        <hr />
      </p>
      <p> {pageContent.description}</p>
    </div>
  );
}
