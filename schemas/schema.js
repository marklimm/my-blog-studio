// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import author from './author'
import blockContent from './blockContent'
import category from './category'
import post from './post'
import project from './project'
import screencast from './screencast'
import tag from './tag'
import vimeo from './vimeo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    //  "supporting types"
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    vimeo,

    //  "top level schema types"
    author,
    category,
    post,
    project,
    screencast,
    tag,
    
  ]),
})
