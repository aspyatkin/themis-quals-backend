module.exports = function (post) {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    createdAt: post.createdAt.getTime(),
    updatedAt: post.updatedAt.getTime()
  }
}
