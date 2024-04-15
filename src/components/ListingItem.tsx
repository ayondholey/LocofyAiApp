import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  showBestTime?: boolean;
  superhostIcon?: string;
  heartIcon?: string;
  starIcon?: string;
  trendIcon?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propMinWidth2?: CSSProperties["minWidth"];

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  propMinWidth,
  propMinWidth1,
  propPadding,
  propFlex,
  propMinWidth2,
  onListingItemContainerClick,
  superhostIcon,
  heartIcon,
  starIcon,
  trendIcon,
}) => {
  const listingTitleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const listingSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const bottomContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const pricePerNightStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceChartStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={styles.listingItem} onClick={onListingItemContainerClick}>
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img className={styles.superhostIcon} alt="" src={superhostIcon} />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src={heartIcon}
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle} style={listingTitleStyle}>
              {listingTitle}
            </div>
            <div
              className={styles.listingSubtitle}
              style={listingSubtitleStyle}
            >
              {listingSubtitle}
            </div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src={starIcon}
            />
          </div>
        </div>
        <div className={styles.bottomContainer} style={bottomContainerStyle}>
          <div className={styles.pricePerNight} style={pricePerNightStyle}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          {showBestTime && (
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="lazy"
                alt=""
                src={trendIcon}
              />
              <div className={styles.priceChart} style={priceChartStyle}>
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
