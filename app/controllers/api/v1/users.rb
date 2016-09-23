module API
  module V1
    class Users < Grape::API
      version 'v1'
      format :json

      resource :users do
        desc 'Show user'
        params do
          requires :id, type: Integer, desc: 'User id'
        end
        route_param :id do
          get do
            user = User.find_by(id: params[:id])
            if user
              user
            else
              status :not_found
            end
          end
        end

        desc 'Deletes user'
        params do
          requires :id, type: Integer, desc: 'User id'
        end
        route_param :id do
          delete do
            user = User.find_by(id: params[:id])
            return status :not_found if user.nil?
            if user.destroy
              user
            else
              status :unprocessable_entity
            end
          end
        end

        desc 'Add user'
        params do
          requires :email, type: String, desc: 'E-mail address'
          requires :password, type: String, desc: 'Password'
        end
        post do
          params[:password_confirmation] = params[:password] # YOLO XD
          user = User.new(params)
          if user.save
            user
          else
            status :unprocessable_entity
          end
        end

        desc 'Updates user'
        params do
          requires :id, type: Integer, desc: 'User id'
          requires :email, type: String, desc: 'E-mail address'
        end
        route_param :id do
          put do
            user = User.find_by(id: params[:id])
            return status :not_found if user.nil?
            if user.update_attributes(email: params[:email])
              user
            else
              status :unprocessable_entity
            end
          end
        end

        desc 'Get all users'
        get do
          User.all
        end
      end
    end
  end
end
