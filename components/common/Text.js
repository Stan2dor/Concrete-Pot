import Link from "next/link";

const TextItem = () => {
  return (
    <div className='title'>
      {/* <h1> im h1 hereo </h1> */}
      <div className='sub-title'>
        <Link href='/products'>
          <a>Store</a>
        </Link>

        {/* <div className='sub-text'> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TextItem;
