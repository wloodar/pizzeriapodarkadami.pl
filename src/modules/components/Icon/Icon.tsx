import Instagram from './Social/Instagram'
import Facebook from './Social/Facebook'
import ArrowLeft from './Arrows/ArrowLeft'
import ArrowRight from './Arrows/ArrowRight'
import ArrowUpRight from './Arrows/ArrowUpRight'
import Menu from './Menu/Menu'
import X from './General/X'
import PizzaSlice from './General/PizzaSlice'

interface Icon {
    name: string
    className?: string
}

const Icon = ({
    name,
    className,
    ...rest
}: Icon & JSX.IntrinsicElements['svg']) => {
    switch (name) {
        case 'instagram':
            return <Instagram className={className} />
        case 'facebook':
            return <Facebook className={className} />
        case 'arrowLeft':
            return <ArrowLeft className={className} />
        case 'arrowRight':
            return <ArrowRight className={className} />
        case 'arrowUpRight':
            return <ArrowUpRight className={className} />
        case 'menu':
            return <Menu className={className} />
        case 'x':
            return <X className={className} />
        case 'pizzaSlice':
            return <PizzaSlice className={className} />
        default:
            return <></>
    }
}

export default Icon
