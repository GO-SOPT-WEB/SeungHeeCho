import "../style/mycategory.css";
import { myCategoryUtil } from "../utils/mycategoryutil.js";


function MyCategory($container) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = `
        <body class="my_body">
            <header>
                <h1>✨ WEB TO DO MATE ✨</h1>
            </header>
            <main class="my_wrapper">
                <h2 class="my_title"> 📌 나의 카테고리 📌 </h2>
                <section id="category_list"></section>
            </main>
            <footer>
                <nav class="footer_btn" onclick="location.href='/'">
                    <img class="btnimg" src="./img/home.png" alt="달력 메뉴 버튼" />
                    <div class="btntext">달력</div>
                </nav>
                <nav class="footer_btn" onclick="location.href='/mycategory'">
                    <img class="btnimg" src="./img/my.png" alt="마이 메뉴 버튼"/>
                    <div class="btntext">MY</div>
                </nav>
            </footer>
        </body>
        `;
    };
    this.render();
    myCategoryUtil();

}
export default MyCategory;