const coursesData = require('../data/courses');

module.exports = {
  User: {
    courses: (obj) => {
      return coursesData
        .filter(course => {
          let authorsLength = 0;
          for (author of course.authors) {
            if (authorsLength < course.authors.length) {
              if(author.id === obj.id){
                authorsLength = course.authors.length + 1;
                return true;
              }
            }
          }
        }
        )
        .map(course => {
          return {
            id: course.id,
            title: course.title.pt_BR,
            image_thumbnail: course.image_thumbnail,
            description: course.description.pt_BR
          }
        })
    }
  }
}



