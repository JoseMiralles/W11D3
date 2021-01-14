class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all.to_a
    render "api/benches/index"
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @benches.errors.full_messages, status: 401
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

end
