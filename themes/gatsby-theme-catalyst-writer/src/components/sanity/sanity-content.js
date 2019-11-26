/** @jsx jsx */
import { jsx } from "theme-ui"
import PortableText from "@sanity/block-content-to-react"
import { useSanityConfig } from "./use-sanity-config"
import serializers from "./serializers"

const SanityContent = props => {
  const sanityConfig = useSanityConfig()
  return (
    <PortableText
      blocks={props.data}
      serializers={serializers}
      {...sanityConfig}
    />
  )
}

export default SanityContent
