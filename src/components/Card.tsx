import Dice from '/images/icon-dice.svg';

interface CardProps {
    number: number;
    toggleRefresh: () => void;
    children: React.ReactNode;
}

export default function Card({ children, number, toggleRefresh }: CardProps) {
    const src = `./images/pattern-divider-${
        window.innerWidth < 500 ? 'mobile' : 'desktop'
    }.svg`;

    return (
        <div
            style={{
                backgroundColor: 'hsl(217, 19%, 24%)',
                padding: '40px 20px',
                paddingBottom: '80px',
                borderRadius: '10px',
                maxWidth: '500px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    color: 'hsl(150, 100%, 66%)',
                    fontWeight: '800',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '5px',
                }}
            >
                Advice #{number || 0}
            </div>
            {children}
            <img src={src} alt='divider' className='divider' />
            <div className='dice' onClick={toggleRefresh}>
                <img src={Dice} alt='dice' />
            </div>
        </div>
    );
}
