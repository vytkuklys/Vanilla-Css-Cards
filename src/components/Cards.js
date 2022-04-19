import { Card } from './Card'
import { Error } from '../ui/Error'
import { Spinner } from '../ui/Spinner'

export function Cards({ data, isLoading, errorMessage }) {
    const message = "Sorry, we couldn’t get the needed information."
    return (
        <div className="row u-equal-height">
            {(errorMessage) ?
                (<Error title={errorMessage} message={message} />) :
                (isLoading) ?
                    (<Spinner />) :
                    (data != null && data.map((item) => {
                        return (<Card key={item.id} item={item} status={item.status} />);
                    }))}
        </div>
    )
}
