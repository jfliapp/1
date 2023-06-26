<template>
  <div class="footer">
    <div class="footer-tool">
      <div class="tool-cell">
        <div class="title">工具</div>
        <div class="content">
          <p>交易</p>
          <p>下载中心</p>
          <p>财经快讯</p>
          <p>财经日历</p>
        </div>
      </div>
      <div class="tool-cell">
        <div class="title">法律文件</div>
        <div class="content">
          <p>隐私条款</p>
          <p>免责申明</p>
          <p>风险提示</p>
          <p>用户协议</p>
        </div>
      </div>
      <div class="tool-cell">
        <div class="title">联系方式</div>
        <div class="content">
          <div>
            <p>Demo website Company</p>
            <p>E-mail：support@demowebsite.com</p>
          </div>

          <div class="content-icon">
            <div v-for="item in 6" :key="item" class="icon-item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACFElEQVRIS8VW7VFbQQxcdUAqCFQAriBQQUgFQAfWNRBo4AQVBCoIHQAd2BXEqSBOBcrszd2be588x57kZvzH0mlP0q70BP/oyFwcMzty99PaX0TWqrqdE+NdIDNbArgCcDYScOXujyGEhynAUSAzuwRgAI7nvBjABoCq6vOQ/yCQmd0C+DoToOt2q6p33T97QHuClPh3qsrHNqcFlMv1/S8z6V77UpexBRRj3IjIR95w998AVtXt42KrI7r724jPRlVPiq0Byuxi88shbReqyibDzM4BvHRAnkII19l+lO01O29U9ZH2BijGuBKRlk6YkaouSvABnwtVfaU9xvgsIp879WvuJyCKEcCvkd58KKI0M77+Wy7tzxBCQ/0Y46uIfBqIke4XoF5ZqgsX1EgpYdVHzf8n3UwApaxnAbn7ddULTgr2kiW9LDQ+CFBu8gmzyjMvaUREtgcHcveHEAKzST11d0rhflegKTKwR6Q16c6sthUpmgkwiwy5mT16u3vSSUXrFLgKWgP16O3u6xBC0tWoYOkkIuc5A5aKD3EAzPBHba/KSYrXWuwLNmfVjKA89tNUyIea4Y8lZKlpq+10Kz4cYS2d/Z+hmkuwzy4q2U+vieK1507qgbTI0J1R3E3ufj+0GoZmInsiIsudVnkdiJpx9+XAZE9umX0UbloHY+fdr6CqnGRa90uIa+Awn1tTr9zF9gewaTcq1hP38gAAAABJRU5ErkJggg=="
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-title">
      <div class="footer-title-l">
        <img
          src="data:image/png;base64,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gDtAIwDEAQBrFcBx1sQKq8oCiGEBJLAAdXFRPv+MgkwX5wkv1QYAoolC8TYfgJwPMB6mUIzFKhRfawGwWwBnhiZ2dwAAgjpAo74g81Hezb4O+Nf4BwXkEHHSCb2KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA5LTI3VDE1OjI1OjU1KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOS0yN1QxNzo1MToxNiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOS0yN1QxNzo1MToxNiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5MGNiZTlmLTE3NzctNGMxOC1hYTE1LWIyNTk5YzBkNDMxMCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjkwMzUxMTNmLWI0OTItNjU0Zi1iODJhLWFkNjgwMmFkMDU0OSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhhNjRjZDg1LWQ4OGMtNDVjYS04MWE2LTY1ZTY4YjZjYmEzZiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGE2NGNkODUtZDg4Yy00NWNhLTgxYTYtNjVlNjhiNmNiYTNmIiBzdEV2dDp3aGVuPSIyMDE5LTA5LTI3VDE1OjI1OjU1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjkwY2JlOWYtMTc3Ny00YzE4LWFhMTUtYjI1OTljMGQ0MzEwIiBzdEV2dDp3aGVuPSIyMDE5LTA5LTI3VDE3OjUxOjE2KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FLheYAAAAjVJREFUSIm11kuoTVEcx/HPksctUvIoJwMDyltKopRMJQPlktqlPOoaIG8TTCSvvPMIg7vrTjyiDA3IhJAkJBmIu1NChBBtg71O97o55+zD9Z/81vP/XWuv/17/FTrbNWMBmzAeV3GxkuSlJ/dtCsV9TI3lZTiAjWUn92kCtC2CbqAVOTZkaRhX1kHZnY3ArlhegtcYjDO4gEllnJTd2QnFee2LIDiLR5iYpWFhb8FGYyG+YnNsGxB1edSTvQXriLot6ia8xBTcxi0Mz9Kw9V9h8zALz3Eotk3DcEyO9UVRd2dpGPQvsFNRl3drex/1E1SS/FW3cXv/FrYBo/BQEe71rHqWbVkaxjQLa9G1ysUNQCpJ/hHrYjVtFrYr9qV40ggWgYfxFjOzNMwuCxuL9bG8tgyom7VFvVQWVj3sLbqCoZRVkvw87ih+hZWNYFMxFx/UjqyWHtrTlkXdn6XhN/89YReirqnhCL5EffunzkqSP8Zlxd15rBZsKcbgAeplua2YgGt1xiRR27I0DPsT7EjUFXWcwGcNIrSS5J+wJ1aP94TtxFDcxN06fvrhCr5hdYNFbVd88tYsDTOqsCHYEQe0NnAwBAvQPy6wplWS/DuqEXmuCtseG47qylW17A0O4oXf78tawA48VeS8+aGzXfXFEhpNruGwbn+Whjm4jo7uz4J5eFYC+kORSAciZGnN4bniy82t1kNnu1W6bo3/adP74jTeKYJjJH72kvOg2N1jnK0k+b1fghmJB9FJy+AAAAAASUVORK5CYII="
          alt="" />
      </div>
      <div class="footer-title-r">
        <p>您的投資價值可能上漲，也可能下跌。在保證金交易中，損失有可能超過保證金甚至是大部分本金。高槓桿意味著高風險，您應仔細考慮您的風險承受能力和對槓桿交易的理解程度。</p>
        <p>您必須認識到，風險不僅包含交易風險，還包括一些不可抗力因素所造成的風險，比如：網絡中斷，政治動亂、黑客攻擊等。</p>
        <p>Demo website Company受SFC證券及期貨事務監察委員會監管，持牌編號DEMOID，査詢連結
          https://apps.sfc.hk/publicregWeb/searchByName?locale=zh</p>
        <p>本網站可在全球範圍內訪問，網站上所有的信息僅供參考，並不構成指引性建議，對於任何人依據本網站或網站的信息採取的作為或不作為所導致的後果，我們不承擔任何責任。</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 428px;
  background: #333333;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
  box-sizing: border-box;

  .footer-tool {
    display: flex;

    .tool-cell {
      width: 300px;
      display: flex;
      flex-direction: column;

      .title {
        color: #585858;
      }

      .content {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .content-icon {
          display: flex;

          .icon-item {}
        }
      }
    }
  }

  .footer-title {
    display: flex;
    padding: 30px 0;
    box-sizing: border-box;

    .footer-title-l {
      padding-right: 8px;

      img {
        width: 16px;
        height: 12px;
        vertical-align: middle;
      }
    }

    .footer-title-r {}
  }
}
</style>