taz = Project.create(name: 'taz', description: 'patient focused EMR app')
cooking = Project.create(name: 'whats cooking?', description: 'recipe finder with shopping list component')
karma = Project.create(name: 'karma', description: 'geo based volunteer opportunity finder')

taz.tags.create(name: 'angular')
taz.tags.create(name: 'mongo')
cooking.tags.create(name: 'api')
karma.tags.create(name: 'ruby')
karma.tags.create(name: 'rails')
karma.tags.create(name: 'PSQL')

Thought.create(title: 'Day uno', body: 'this is the first post for this blog', author: 'Me')
Thought.create(title: 'Day zwei', body: 'this is the second post for this blog, but it was done at the same time', author: 'Me')
Thought.create(title: 'Day trois', body: 'this is the third post for this blog, see above', author: 'Me')
