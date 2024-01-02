---
sidebar_position: 1
---

# Ruby

- https://www.ruby-lang.org/en/
  - https://www.ruby-lang.org/en/documentation/
     - https://ruby-doc.org/ - Official API Documentation (based on versions)


## Language
Everything is basically an object.


This Object often is referred to as the top-level scope in Ruby.
:::tip
The top-level scope is an empty, **anonymous object**. All Ruby code starts in here.
:::

For example:
```
puts "hello"
```
Is the same as:
```
self.puts "hello"
```

**self** always refer to the current executing object.

### Variables
Variables have not type.

category | type | example
---------|------|--------
$        | global | $my_thing
@@       | class | @@count
@        | instance | @space
[a-z] or _ | local | _my_other_thing
[A-Z]    | constant | Max

- `self` - refers to currenlty executing object (i.e. self.puts "hello")
- `nil` - assigned to uninitialized variables


:::tip
Ruby only considers `nil` to be equivalent to `false`.
:::

Because *“is equivalent to true”* or *“is equivalent to false”* is quite a clunky thing to repeat so often the programming community has come up with terms for this: `truthiness` and `falsiness`.

So we can say that the string "my_string" is truthy. And `nil` is the only other thing that is **falsy** in Ruby, except `false` itself.

Empty strings `""`, arrays `[]`, and hashes `{}` are all **truthy**.

### Strings
Reference - https://ruby-doc.org/3.1.4/String.html

- Uses both `""` and `''`
- Double quotes allow escaping and expressions using `#{}`
- Can do lots of stuff:
  ```
  "this"+"that"
  "text".length
  "text".upcase!
  my_str = "this"
  my_str[0,4] - starting at 1st char extract out
  my_str[0..3] - extract characters from 0 through 3
  ```

### Symbols
Symbols are unique identifiers that are considered **code**, not data. A symbol is written like this: `:something`

### Arrays & Hashes

Array - https://ruby-doc.org/3.1.4/Array.html
```
ary = [1, 2, 3]
ary + ["foo", "boo"]
ary[0]
ary[0,2]
```
Array stuff:
```
str = ary.join
str2 = ary.join(":")
ary2 = str2.split(":")
```

Hash - https://ruby-doc.org/3.1.4/Hash.html
```
h = {foo: 0, boo: 1}
h = {'foo': 0, 'boo':1, other: 2, :and => 3, "and" => 4, 5 => 5}
h[foo:] = 0
h[5] = 5
h["and"] = 4
h[:and] = 3
```

### Control Structures

- case
- while
- for
  ```
  for elt in [100,-9.6,"pickle"]
    print "#{elt}\t(#{elt.class})\n"
  end
  ```

### Iterators
Used to iterator over a collection.

:::info
Methods off containers such as Arrays and Hashes that accept `blocks` are called **Iterators** (aka *iterator methods*)
:::

### Block
An anonymous chuck of code passed to a method. When using an *iterator* receives parameters using `|p|`.

```
[1, 2, 3, 4, 5].each { |number| puts "#{number} was passed to the block" }
```

:::tip
A block is a piece of code that can accepts arguments, and can return a value. A block is always passed to a method call.
:::

Single line syntax `{}`:
```
5.times { puts "hello"}
```
Multiple line syntax `do ... end` (recommended):
```
5.times do
  puts "hi"
  puts "goodbye"
end
```

### Method

:::tip
default parameters make passing optional
:::

#### Keyword arguments
Allows the caller to use a different order.

```
def write(file:, data: "default")
 ..
end
```
#### Splat
Captures remaining arguments into an **array**

```
def add(first_num, *others)
  sum = first_num
  others.each { |n| sum + n}
  sum
end
```

Captures remaining arguments into a **hash**:
```
def config(m: nil, **options)
  options[:it] ||= "nope"
end
puts config( foo:0, it: "YES" )
```

#### Block
Uses `&` to specify. To test for the optional block use `block_given?`

```
def greet(name, &my_block)
    # Check if a block was provided
    if block_given?
      # Execute the block and pass the name as an argument
      my_block.call(name)
    else
      puts "Hello, #{name}!"
    end
  end

  # Call the method with just a name
  greet("John")
  # Call the method with a name and a block
  greet("Mary") do |name|
    puts "It's a pleasure to meet you, #{name}!"
end
```

### Classes
There exist a superclass of every other class - `Object`.

Any top-level method can be called directly similar to a function call or can use `self.foo()`

Does **not** allow *multiple inheritance*, which is inheriting from multiple superclasses. Uses the inclusion of *modules*, thus providing a way to [mixin](https://en.wikipedia.org/wiki/Mixin) the modules methods.

- `polymorphism` - an entity in code such as a variable and method can have more than one form. For example, accessing different objects of different types using the same interface. Each type can provide its own independent implementation of this interface.
- `self` -
- Use `private` within class and following methods will not be publically available

Constants can be defined in a [Class and Module](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/constants.html).

#### class & instance methods
Requires using `self.` to define a class method.

```
class Hello
  def self.from_the_class
    "Hello, from a class method"
  end

  def from_an_instance
    "Hello, from an instance method"
  end
end
```
To use:
```
Hello.from_the_class
Hello.new.from_an_instance
```

Can also use `extend self` to create class methods with the module:

```
module MyModule
  extend self
  def foo
  end
end
```
#### super
A subclass can *enhance* the superclass's method, versus replacing it, by using `super`:

```
 class Student2 < Human
    def identify
      super
      print "I'm a student too.\n"
    end
  end
```
The superclass `Human` also contains the method `identify`


#### private
Following methods not publically available.

#### Accessors

Since many instance variables need accessor methods, Ruby provides convenient shortcuts for the standard forms.

Shortcut | Effect
---------| --------
attr_reader :v | def v; @v; end
attr_writer :v | def v=(value); @v=value; end
attr_accessor :v | attr_reader :v; attr_writer :v
attr_accessor :v, :w | attr_accessor :v; attr_accessor :w

#### Initialization
Whenever Ruby creates a new object, it looks for a method named `initialize` and executes it.
```
class Fruit
  def initialize
    @kind = "apple"
    @condition = "ripe"
  end
end
```

#### Singleton methods
Requires instantiating the object first and then redefining the method.

```
obj = TheObj.new
def obj.method
 ..
end
```

### Modules
Are not instantiated. Used for sharing methods by including within a class.

#### Include and Extend
TBD

#### Superclass
When a superclass is defined within a module, you need to use `::` to specify its full path.

```
module Animals
  class Mammal
    # ...
  end
end

class Dog < Animals::Mammal
  # ...
end

```

### Procedure objects
A Proc object is an encapsulation of a block of code, which can be stored in a local variable, passed to a method or another Proc , and can be called.

Proc - https://ruby-doc.org/3.1.4/Proc.html

```
myproc = proc { p "help me"}
myproc.call
```

### Exceptions

#### rescue
A block executes until an exception is hit, transfers control the a bloc of error handling code marked with `rescue`

#### ensure
The `ensure` code block executes regardless of the success or failure of the `begin` block.

```
begin
  file = open("/tmp/some_file", "w")
  # ... write to the file ...
rescue
  # ... handle the exceptions ...
ensure
  file.close   # ... and this always happens.
end
```

### Notes

- multiple statements on one line must be separated by `;`
- comments `#` and `=begin` .. `=end`


## Installation

Install [rbenv](https://github.com/rbenv/rbenv)

```
brew install rbenv ruby-build
```

```
rbenv -v
```

Using *ruby-build 20231014*
```
ruby-build --version
```

Update shell using `rbenv init`. For example:

```
rbenv init
```
```
# Load rbenv automatically by appending
# the following to ~/.bashrc:
eval "$(rbenv init - bash)"
```

Execute the following:

```
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
```

Review the list of versions available
```
rbenv install --list
```
Install a specific version
```
rbenv install 3.1.4
```

```
rbenv global 3.1.4
```

Add to Shell

```
rbenv init
```

### Visual Studio Extensions

- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)


### Brew Installation (required for WSL)
A Package Manager.

Used to *re-synchronize* the latest package index files:
```
sudo apt update
```

Install [Homebrew](https://brew.sh/)
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Codespaces/WSL Shell:
```
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
```
Using a **new** terminal:
```
brew -v
```

Dependency Packages
```
sudo apt-get install build-essential
```
```
brew install gcc
```

## References

- [Ruby user's guide](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/index.html)
- [Ruby For Beginners](https://ruby-for-beginners.rubymonstas.org/index.html)
- [Learning Ruby from Zero to Hero](https://www.freecodecamp.org/news/learning-ruby-from-zero-to-hero-90ad4eecc82d/)
- https://www.geeksforgeeks.org/ruby-programming-language/?ref=lbp
- https://stackoverflow.com/questions/28009772/ruby-modules-included-do-end-block