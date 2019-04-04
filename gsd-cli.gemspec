Gem::Specification.new do |s|
  s.name        = "gsd-cli"
  s.version     = "0.1.5"
  s.executables << "gsd-cli"
  s.date        = "2019-04-03"
  s.summary     = "A cli for launching servers"
  s.description = "A simple cli for launching dedicated game servers"
  s.authors     = ["Egee"]
  s.email       = "brian@egee.io"
  s.files       = Dir["bin/*"] + Dir["lib/*.rb"] + Dir["lib/*/*.rb"]
  s.homepage    = "https://github.com/Egeeio/gsd-cli"
  s.license     = "MIT"
end