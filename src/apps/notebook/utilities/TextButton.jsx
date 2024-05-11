export default function TextButton ({label, active}) {
  const styles = active ? 'text-mainwhite bg-mainBlue' : 'text-darkBlue bg-lightBlue1'
    return (
      <>
        <button className={`${styles} rounded-md px-3 py-1`}>
          {label}
        </button>
      </>
    )
}