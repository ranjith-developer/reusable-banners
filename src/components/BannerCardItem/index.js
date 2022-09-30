// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerItem} = props
  const {headerText, description, className} = bannerItem
  return (
    <li className={`${className} banner-item`}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="show-more-button" type="button">
        Show more{' '}
      </button>
    </li>
  )
}

export default BannerCardItem
