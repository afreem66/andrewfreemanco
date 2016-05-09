require 'test_helper'

class ThoughtsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @thought = thoughts(:one)
  end

  test "should get index" do
    get thoughts_url
    assert_response :success
  end

  test "should create thought" do
    assert_difference('Thought.count') do
      post thoughts_url, params: { thought: { author: @thought.author, body: @thought.body, date: @thought.date, title: @thought.title } }
    end

    assert_response 201
  end

  test "should show thought" do
    get thought_url(@thought)
    assert_response :success
  end

  test "should update thought" do
    patch thought_url(@thought), params: { thought: { author: @thought.author, body: @thought.body, date: @thought.date, title: @thought.title } }
    assert_response 200
  end

  test "should destroy thought" do
    assert_difference('Thought.count', -1) do
      delete thought_url(@thought)
    end

    assert_response 204
  end
end
