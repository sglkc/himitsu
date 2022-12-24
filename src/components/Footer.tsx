export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 -mx-8 px-4 py-6 text-center">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap gap-2 justify-center">
          <span>Made with <a href="https://reactjs.org">React</a></span>
          <span>Supported by <a href="https://www.mongodb.com">MongoDB</a></span>
          <span>Deployed at <a href="https://netlify.com">Netlify</a></span>
        </div>
        <p>
          Source code hosted on <a href="https://github.com/sglkc/himitsu">GitHub </a>
          under the <a href="https://github.com/sglkc/himitsu/blob/master/LICENSE">MIT License</a>
        </p>
        <p>&copy; 2022 <a href="https://github.com/sglkc">sglkc</a></p>
      </div>
    </footer>
  );
}
