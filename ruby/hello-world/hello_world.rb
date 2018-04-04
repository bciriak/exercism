module HelloWorld
  def hello(name = "World")
    "Hello, #{name}!"
  end
end

HelloWorld.extend(HelloWorld)
