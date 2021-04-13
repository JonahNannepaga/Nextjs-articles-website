import ArticleItem from './ArticleItem';
import styles from '../styles/Article.module.css';

function ArticleList({articles}) {
    return (
        <div className={styles.grid}>
             {articles.map(article => <ArticleItem article={article} key={article.id}/>)}
        </div>
    )
}

export default ArticleList
