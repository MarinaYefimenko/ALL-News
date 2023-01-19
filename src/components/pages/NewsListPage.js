import ExtendList from '../extendList/ExtendList';

const NewsListPage = (props) => {
    return (
        <ExtendList categoryName={props.categoryName}/>
    )
}

export default NewsListPage;