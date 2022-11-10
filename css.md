## MenuBar
```css
.menu-bar {
  .am-tab-bar {
    position: relative;
    overflow: visible !important;
  }
  .am-tabs {
    width: 100%;
    overflow: visible !important;
  }
  .am-tabs-pane-wrap {
    overflow-y: visible !important;
  }
  .am-tab-bar-item {
    height: auto !important;
  }
  .am-tab-bar-tab {
    flex: 0 0 33.3333% ;
  }
  .am-tabs-tab-bar-wrap {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
  }
}
```

## home
```css
@import '../../assets/mixin.less';

.home {
  width: 100%;
  position: relative;
  padding: 12px;
  &-header {
    .flex(row, space-between);
    &_title {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .search {
    margin: 12px 0;
    background: #fff;
    .am-list-item .am-list-line .am-list-content, .am-list-item .am-list-line .am-list-extra {
      font-size: 18px;
    }
    &-time {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;
      .flex(row, space-between);
      &_left {
        color: #000;
      }
      &_right {
        color: #888;
      }
    }
  }

  .hot {
    h1 {
      font-size: 20px;
    }
    &-lists {
      .flex(row, space-between);
      flex-wrap: wrap;
      .hot-lists-item {
        width: 49%;
        margin-bottom: 15px;
        padding: 12px;
        background: #fff;
        box-sizing: border-box;
        border-radius: 12px;
        .img {
          width: 100%;
          height: 100px;
          border-radius: 8px;
          object-fit: cover;
        }
        .title {
          font-size: 16px;
        }
        .info {
          margin: 12px 0;
          font-size: 16px;
          color: #8a9094;
          white-space: pre-wrap;
        }
        .price {
          font-size: 15px;
          color: #ff4d6a;
        }
      }
    }
  }
}
```

## search
```css
@import '../../assets/mixin.less';

.search-page {
  .am-search {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
  }
  .result {
    width: 100%;
    margin-top: 40px;
    padding: 10px;
    box-sizing: border-box;
    .item {
      .flex(row, flex-start);
      height: 100px;
      padding: 6px;
      background: #fff;
      margin-bottom: 6px;
      img {
        width: 120px;
        height: 86px;
        object-fit: cover;
      }
      &-right {
        .flex(column, space-between);
        flex: 1;
        height: 90px;
        margin-left: 16px;
        .title, .price {
          width: 100%;
        }
        .title {
          font-size: 20px;
        }
        .price {
          color: #ff4d6a;
          font-size: 16px;
        }
      }
    }
  }
}
```

## house
```css
@import '../../assets/mixin.less';

.banner_info {
  width: 100%;
  height: 200px;
}

.house-page {
  .banner {
    .banner_info;
    img {
      .banner_info;
      object-fit: cover;
    }
  }

  .info {
    margin: 12px;
    padding: 12px;
    background: #fff;
    &-title {
      font-size: 20px;
      font-weight: 500;
    }
    &-msg {
      padding: 5px 0;
    }
  }

  .comment {
    &-title {
      font-size: 20px;
      line-height: 20px;
      margin-left: 12px;
      margin-top: 20px;
    }
    &-lists {
      margin: 12px 12px 60px 12px;
      background: #fff;
      &_item {
        .flex(row, flex-start, flex-start);
        padding: 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .right {
          flex: 1;
          padding-left: 16px;
          &-top {
            .flex(row, space-between);
          }
          &-bottom {
            color: rgba(0, 0, 0, 0.4);
            font-size: 14px;
          }
        }
      }
    }
  }

  .footer {
    .flex(row, flex-start, center);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 40px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.4);
  }  
}

.modal-comment {
  width: 90%;
  .am-textarea-item {
    margin-top: 25px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .comment-btn {
    margin-top: 15px;
  }
}
```

## order
```css
@import '../../assets/mixin.less';

.order-page {
  .tab {
    margin-bottom: 50px;
  }
  .order-item {
    .flex(row, flex-start);
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    img {
      width: 120px;
      height: 80px;
      object-fit: cover;
    }
    .center {
      flex: 1;
      margin: 0 12px;

      .title {
        font-size: 18px;
      }
      .price {
        color: #ff4d6a;
        padding: 8px 0;
      }
      .time {
        color: rgba(0, 0, 0, 0.4);
      }
    }
    .pay {
      margin-right: 4px;
    }
  }
}
```

## user
```css
@import '../../assets/mixin.less';

.user-page {
  .info {
    position: relative;
    margin-bottom: 20px;
    padding: 20px;
    background: #ff4d6a;
    box-sizing: border-box;
    .set {
      position: absolute;
      right: 20px;
      top: 10px;
      color: #fff;
      z-index: 10;
    }
    .user {
      .flex(column, center);
      color: #fff;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
      .tel {
        margin: 10px;
        padding: 0px 10px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.5);
        color: rgba(0, 0, 0, 0.5);
        font-size: 16px;
      }
    }
  }

  .cells {
    .am-list {
      margin-bottom: 30px;
    }
  }
}
```
