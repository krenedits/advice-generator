import Card from './Card';
import { useCallback, useEffect, useState } from 'react';

export default function Advice() {
    const [advice, setAdvice] = useState('');
    const [number, setNumber] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleRefresh = useCallback(() => {
        setRefresh((prev) => !prev);
    }, []);

    const fetchAdvice = useCallback(() => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
            .then((response) => response.json())
            .then((data) => {
                const { advice, id } = data.slip;
                setNumber(id);
                setAdvice(advice);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchAdvice();
    }, [refresh]);

    return (
        <Card number={number} toggleRefresh={toggleRefresh}>
            <div
                style={{
                    color: 'hsl(193, 38%, 86%)',
                    fontSize: '28px',
                    fontWeight: 800,
                }}
            >
                {loading ? '...' : '“' + advice + '”'}
            </div>
        </Card>
    );
}
