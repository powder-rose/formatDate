const  formatDate = (date) => {
diffDate = new Date() - date

    if (diffDate < 1000) {
        return console.log('прямо сейчас')
    }

    let seconds = Math.floor(diffDate / 1000)

    if (seconds < 60) {
        return console.log(seconds + ' сек. назад');
      }

      let min = Math.floor(diffDate / 60000);
      if (min < 60) {
        return console.log(min + ' мин. назад');
      }

      const addNull = (date) => {
        return (date < 10) ? '0' + date : date;
        }

      let day = date.getDate()
      let year = date.getFullYear()
      let month = addNull(date.getMonth() + 1)
      let hours = addNull(date.getHours())
      let minutes = addNull(date.getMinutes())

  return console.log(`${day}.${month}.${year} ${hours}:${minutes}`)
}

console.log(formatDate(new Date(new Date - 86400 * 1000)))