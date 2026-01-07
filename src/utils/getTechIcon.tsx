import { 
  SiNodedotjs, SiTypescript, SiReact, SiNextdotjs, SiSpring, SiVuedotjs, SiAngular,
  SiCss3, SiMui, SiTailwindcss, SiSass, SiBootstrap,
  SiMysql, SiGraphql, SiMongodb, SiFirebase, SiPostman, SiSupabase,
  SiDocker, SiKubernetes, SiApachekafka, SiAmazon, SiGooglecloud, SiTerraform, SiHelm,
  SiJira, SiGitlab, SiBitbucket, SiGit,
  SiWordpress, SiShopify, SiWoo, SiDrupal, SiMagento, SiHubspot,
  SiIonic, SiTwilio, SiSwift
} from 'react-icons/si'
import { FaReact, FaJava } from 'react-icons/fa'
import { techColors } from '../constants/techColors'

export const getTechIcon = (techName: string): React.ReactElement => {
  const iconMap: { [key: string]: React.ReactElement } = {
    'NodeJS': <SiNodedotjs style={{ color: techColors['NodeJS'] }} />,
    'TypeScript': <SiTypescript style={{ color: techColors['TypeScript'] }} />,
    'React': <SiReact style={{ color: techColors['React'] }} />,
    'NextJS': <SiNextdotjs style={{ color: techColors['NextJS'] }} />,
    'Java': <FaJava style={{ color: techColors['Java'] }} />,
    'Spring Boot': <SiSpring style={{ color: techColors['Spring Boot'] }} />,
    'Vue': <SiVuedotjs style={{ color: techColors['Vue'] }} />,
    'Angular': <SiAngular style={{ color: techColors['Angular'] }} />,
    'CSS3': <SiCss3 style={{ color: techColors['CSS3'] }} />,
    'Material UI': <SiMui style={{ color: techColors['Material UI'] }} />,
    'Tailwind CSS': <SiTailwindcss style={{ color: techColors['Tailwind CSS'] }} />,
    'shadcn/ui': <SiReact style={{ color: techColors['shadcn/ui'] }} />,
    'Styled Components': <FaReact style={{ color: techColors['Styled Components'] }} />,
    'SASS': <SiSass style={{ color: techColors['SASS'] }} />,
    'Bootstrap': <SiBootstrap style={{ color: techColors['Bootstrap'] }} />,
    'MySQL': <SiMysql style={{ color: techColors['MySQL'] }} />,
    'GraphQL': <SiGraphql style={{ color: techColors['GraphQL'] }} />,
    'MongoDB': <SiMongodb style={{ color: techColors['MongoDB'] }} />,
    'Firebase': <SiFirebase style={{ color: techColors['Firebase'] }} />,
    'Postman': <SiPostman style={{ color: techColors['Postman'] }} />,
    'Supabase': <SiSupabase style={{ color: techColors['Supabase'] }} />,
    'Docker': <SiDocker style={{ color: techColors['Docker'] }} />,
    'Kubernetes': <SiKubernetes style={{ color: techColors['Kubernetes'] }} />,
    'Kafka': <SiApachekafka style={{ color: techColors['Kafka'] }} />,
    'AWS': <SiAmazon style={{ color: techColors['AWS'] }} />,
    'Google Cloud Platform': <SiGooglecloud style={{ color: techColors['Google Cloud Platform'] }} />,
    'Terraform': <SiTerraform style={{ color: techColors['Terraform'] }} />,
    'Helm': <SiHelm style={{ color: techColors['Helm'] }} />,
    'Jira': <SiJira style={{ color: techColors['Jira'] }} />,
    'GitLab CI/CD': <SiGitlab style={{ color: techColors['GitLab CI/CD'] }} />,
    'Bitbucket CI/CD': <SiBitbucket style={{ color: techColors['Bitbucket CI/CD'] }} />,
    'Git': <SiGit style={{ color: techColors['Git'] }} />,
    'WordPress': <SiWordpress style={{ color: techColors['WordPress'] }} />,
    'Shopify': <SiShopify style={{ color: techColors['Shopify'] }} />,
    'WooCommerce': <SiWoo style={{ color: techColors['WooCommerce'] }} />,
    'Drupal': <SiDrupal style={{ color: techColors['Drupal'] }} />,
    'Magento': <SiMagento style={{ color: techColors['Magento'] }} />,
    'HubSpot CMS': <SiHubspot style={{ color: techColors['HubSpot CMS'] }} />,
    'Ionic': <SiIonic style={{ color: techColors['Ionic'] }} />,
    'Twilio': <SiTwilio style={{ color: techColors['Twilio'] }} />,
    'Swift': <SiSwift style={{ color: techColors['Swift'] }} />,
    'Capacitor': <SiIonic style={{ color: techColors['Capacitor'] }} />,
    'AWS S3': <SiAmazon style={{ color: techColors['AWS S3'] }} />,
    'AWS MediaConvert': <SiAmazon style={{ color: techColors['AWS MediaConvert'] }} />,
    'Lambda': <SiAmazon style={{ color: techColors['Lambda'] }} />,
    'GStreamer': <SiNodedotjs style={{ color: techColors['GStreamer'] }} />,
    'MediaSoup': <SiNodedotjs style={{ color: techColors['MediaSoup'] }} />,
    'WebRTC': <SiReact style={{ color: techColors['WebRTC'] }} />,
    'HLS': <SiNodedotjs style={{ color: techColors['HLS'] }} />,
    'Close.io': <SiNodedotjs style={{ color: techColors['Close.io'] }} />
  }
  
  return iconMap[techName] || <SiReact style={{ color: techColors['React'] }} />
}

export const highlightReact = (text: string): React.ReactNode => {
  const reactPattern = /\b(React|reactjs|ReactJS|React\.js)\b/gi
  const parts = text.split(reactPattern)
  
  return parts.map((part, index) => {
    const isReact = /^(React|reactjs|ReactJS|React\.js)$/i.test(part)
    if (isReact) {
      return (
        <span key={index} style={{ color: techColors['React'], fontWeight: 600 }}>
          {part}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

