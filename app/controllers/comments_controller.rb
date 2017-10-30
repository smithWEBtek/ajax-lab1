class CommentsController < ApplicationController
  before_action :set_post

  def index
    @comments = @post.comments
    # render :json => @comments
    # render layout: false
    respond_to do |format|
      format.html {render 'index.html', layout: false}
      format.js {render 'index.js', layout: false}
    end 
  end

  def show 
    @comment = Comment.find(params[:id])
  end

  def edit
    @comment = Comment.find(params[:post_id])
  end

  def create
    @comment = @post.comments.new(comment_params)    
    if @comment.save
      # render 'comments/show_comment', layout: false
      render 'create.js', layout: false 
    else
      render 'posts/show'
    end
  end

  def destroy
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    redirect_to post_path(@post)
  end

  private
    def set_post 
      @post = Post.find(params[:post_id])
    end

    def comment_params
      params.require(:comment).permit(:content, :post_id)
    end
end