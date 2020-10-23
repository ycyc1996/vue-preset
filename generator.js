module.exports = (api) => {

  console.log(api)

  api.extendPackage(pkg => {
    return {
      scripts: {
        lint: "vue-cli-service lint"
      }
    }
  })


  api.render(files => {
    Object.keys(files).forEach(path => console.log(path))
  })
  api.render('./template')

}

