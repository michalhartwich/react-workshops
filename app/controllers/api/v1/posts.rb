module API
  module V1
    class Posts < Grape::API
      version 'v1'
      format :json

      resource :posts do
        desc 'Show post'
        params do
          requires :id, type: Integer, desc: 'Post id'
        end
        route_param :id do
          get do
            post = Post.find_by(id: params[:id])
            if post
              post
            else
              status :not_found
            end
          end
        end

        desc 'Deletes post'
        params do
          requires :id, type: Integer, desc: 'Post id'
        end
        route_param :id do
          delete do
            post = Post.find_by(id: params[:id])
            return status :not_found if post.nil?
            if post.destroy
              post
            else
              status :unprocessable_entity
            end
          end
        end

        desc 'Add post'
        params do
          requires :author, type: String, desc: 'Author'
          requires :title, type: String, desc: 'Title'
          requires :content, type: String, desc: 'Content'
        end
        post do
          post = Post.new(params)
          if post.save
            post
          else
            status :unprocessable_entity
          end
        end

        desc 'Updates post'
        params do
          requires :id, type: Integer, desc: 'Post id'
          requires :email, type: String, desc: 'E-mail address'
        end
        route_param :id do
          put do
            post = Post.find_by(id: params[:id])
            return status :not_found if post.nil?
            if post.update_attributes(email: params[:email])
              post
            else
              status :unprocessable_entity
            end
          end
        end

        desc 'Get all posts'
        get do
          Post.all
        end
      end
    end
  end
end
