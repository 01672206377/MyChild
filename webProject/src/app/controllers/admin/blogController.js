const Blog = require('../../models/blog')
const { mutipleMongooseToObject, mongooseToObject } = require('../../../util/mongoose')

class BlogController{

    //[GET] /admin/listService
    listBlog(req, res, next){
        Blog.find({})
            .then(blog => {
                res.render('admin/blog/blogList', {
                    blog: mutipleMongooseToObject(blog)
                })
            })
            .catch(next)
    }

    //[GET] /admin/getCreateService
    getCreateBlog(req, res) { 
        res.render('admin/blog/createBlog')
    }

    //[POST] /admin/postCreateService
    postCreateBlog(req, res, next){
        console.log(req.file)
        const blog = new Blog({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            time: req.body.time,
            date: req.body.date,
            location: req.body.location
        })
        if(req.file){
            blog.avatar = req.file.path
        }
        blog.save()
            .then(() => res.redirect('/admin/blog/listBlog'))
            .catch(next);
    }

    //[GET] /admin/:id/editblog
    editBlog(req, res, next){
        Blog.findById(req.params.id)
            .then(blog => res.render('admin/blog/editBlog', {
                blog: mongooseToObject(blog)
            }))
            .catch(next)
    }

    //[PUT] /admin/:id
    updateBlog(req, res, next){
        Blog.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/blog/listBlog'))
            .catch(next)
    }

    //[DELETE] /admin/:id
    deleteBlog(req, res, next){
        Blog.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new BlogController