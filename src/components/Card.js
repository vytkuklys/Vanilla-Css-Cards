import { getFormattedDate } from '../utils/date';

export const Card = ({ item, status }) => {
    return ((status === "publish") && item != null) ?
        (<div className="col-4 blog-p-card--post">
            <header className="blog-p-card__header">
                <h5 className="p-heading--5 p-heading__general">
                    {item._embedded['wp:term'].map(arr1 => arr1.map((arr2) => arr2.id === (item.group[0] ? item.group[0] : item.tags[0]) ? arr2.name : ''))}
                </h5>
            </header>
            <div className="blog-p-card__content">
                <div className="u-crop--16-9">
                    <a href={item.link} aria-hidden="true" tabIndex="-1">
                        <div>
                            <img alt="" height="185"
                                src={item.featured_media}
                                width="330" />
                        </div>
                    </a>
                </div>
                <h3 className="p-heading--4 u-sv-1" style={{ fontWeight: '400'}}>
                    <a href="/blog/release-of-vanilla-framework-v3">{item.title.rendered}</a>
                </h3>
                <p>
                    <em>By <a href={item._embedded.author[0].link}>{item._embedded.author[0].name}</a> on {getFormattedDate(item.date)}</em>
                </p>
            </div>
            <p className="blog-p-card__footer">
                Article
            </p>
        </div>)
        :
        null
}
