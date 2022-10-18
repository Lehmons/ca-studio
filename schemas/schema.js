// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Blocks
import normal from "./blocks/normal";

//Documents
import General from "./documents/general.js";
import Logos from "./documents/logos.js";

// Objects
import LogoObject from "./objects/logoObject.js";
import ImageBlock from "./objects/imageBlock";
import SeoDescription from "./objects/seoDescription";
import SeoTitle from "./objects/seoTitle";
import SocialMediaLink from "./objects/socialMediaLink";
import EmailLink from "./objects/emailLink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    normal,
    General,
    Logos,
    ImageBlock,
    LogoObject,
    SeoTitle,
    SeoDescription,
    SocialMediaLink,
    EmailLink,
  ]),
});
