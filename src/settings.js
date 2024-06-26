import { 
    ReactComponent as Telegram 
} from './assets/telegram.svg'
import { ReactComponent as Github } from './assets/github.svg'
import { ReactComponent as Mail } from './assets/mail.svg'
import { ReactComponent as Gitea } from './assets/gitea.svg'
import { ReactComponent as Status } from './assets/status.svg'
import { ReactComponent as Matrix } from './assets/matrix.svg'
import { ReactComponent as Jenkins } from './assets/jenkins.svg'

export const contacts = [
    {
        "icon": Github,
        "name": "github",
        "link": "https://github.com/mi6e4ka"
    },
    {
        "icon": Matrix,
        "name": "matrix",
        "link": "https://matrix.to/#/@me:mi6e4ka.dev"
    },
    {
        "icon": Telegram,
        "name": "telegram",
        "link": "https://mi6e4ka.t.me"
    },
    {
        "icon": Mail,
        "name": "e-mail",
        "link": "mailto:me@mi6e4ka.dev"
    },
    {
        "icon": Gitea,
        "name": "gitea",
        "link": "https://git.mi6e4ka.dev"
    },
    {
        "icon": Status,
        "name": "status",
        "link": "https://status.mi6e4ka.dev"
    },
]

export const styles = {
    //background: "linear-gradient(180deg, rgba(103,0,151,1) 0%, rgba(45,0,66,1) 100%)",
    background: "linear-gradient(180deg, rgba(103,0,151,1) 0%, rgba(45,0,66,1) 100%)",
    header: "hello world!",
    font: "Light",
}
