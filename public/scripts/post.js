import axios from "./axios.js";
const postTitle = document.querySelector(".article .title ");
const postImg = document.querySelector(".article .imgArticle ");
const postUrl = document.querySelector(".article .imgArticle");
const postDescrip = document.querySelector(".article .description");
//Função que adiciona posts dinamicos dentro de um array
function postCards() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get("blog/post");
        setPost(req.data);
      } catch (err) {
        console.warn("Api request error!");
      }
    }
    fetchData();
  }, []);
  console.log(post);

  function postRender() {
    let title = document.createElement("h3");
    title.createTextNode(this.post.postTitle);
    postTitle.appendChild(this.title);
  }
  postRender();
}
postCards();
