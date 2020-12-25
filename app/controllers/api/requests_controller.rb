class Api::RequestsController < ApplicationController
    def index
        # @requests = Request.all
        @requests = Request.where(requestor_id: params[:id])
        render :index
    end
    
    def create
        @request = Request.new(request_params)
        requestor = User.find_by(id: params[:request][:requestor_id])
        requestee = User.find_by(id: params[:request][:requestee_id])
        
        if @request.save
            requestor.update_attributes(balance: requestor.balance + @request.amount)
            requestee.update_attributes(balance: requestee.balance - @request.amount)
            @requestor = requestor 
            @requestee = requestee     
            
            render :show 
        else
            render json: @request.errors.full_messages, status: 400
        end
    end

    def edit 
        @request = Request.find(params[:id])
        render :show
    end

    def update
        @request = Request.find(params[:id])
        if @request.update(request_params)
            @requestor = User.find_by(id: @request.requestor_id)
            @requestee = User.find_by(id: @request.requestee_id)
            @requestor.update_attributes(balance: @requestor.balance + @request.amount)
            @requestee.update_attributes(balance: @requestee.balance - @request.amount)
            render :show
        else
            render json: @request.errors.full_messages, status: 400
        end
    end

    def destroy
        @request = Request.find(params[:id])
        if @request.destroy
            @requestor = User.find_by(id: @request.requestor_id)
            @requestee = User.find_by(id: @request.requestee_id)
            @requestor.update_attributes(balance: @requestor.balance - @request.amount)
            @requestee.update_attributes(balance: @requestee.balance + @request.amount)
            render json: ["Payment Deleted"]
        else
            render json: @request.errors.full_messages, status: 400
        end
    end

    private
    def request_params
        params.require(:request).permit(:amount, :note, :requestor_id, :requestee_id)
    end
end
