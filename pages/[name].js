import { useRouter } from 'next/router'

const Name = () => {
    const router = useRouter();
    const query = router.query
    const {name} =query
    console.log(query)
    return <div>Welcome {name}</div>;

};
export default Name;
