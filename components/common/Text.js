import Link from "next/link";

const TextItem = () => {
  return (
    <div className='title'>
      {/* <h1> im h1 hereo </h1> */}
      <div className='sub-title'>
        <h2>
          <Link href='/products'>
            <a>Store</a>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default TextItem;
