// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="item-container">
        <img src={imageUrl} className="image-edit" alt={`item${id}`} />
        <div className="item-image">
          <p className="item-info">{topic}</p>
          <p className="item-title">{title}</p>
          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
