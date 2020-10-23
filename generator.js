module.exports = (api) => {

  console.log(api)

  api.render(files => {
    Object.keys(files).forEach(path => console.log(path))
  })
  api.render('./template')

  console.log(api.entryFile)
}

