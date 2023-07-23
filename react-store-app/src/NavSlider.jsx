import { AnimatePresence, motion } from "framer-motion";

function NavSlider({categories, getStore}) {
    
    return (
        <AnimatePresence>
            <motion.nav 
            initial={{ translateX: 100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 100}}
            exit={{translateX: 100, opacity: 0}}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className='bg-zinc-800 shadow-md fixed md:static w-64 md:w-52 lg:w-64 h-screen md:h-auto flex flex-col gap-8 top-0 right-0 pt-20 container mx-auto'
            >
                <button key={'all'} className='linkblock-1' onClick={() => getStore()}>Show All</button>
                {
                categories.map((category, index) => (
                    <button key={index} className='linkblock-1' onClick={() => getStore(category)}>{category}</button>
                ))
                }
            </motion.nav>
        </AnimatePresence>
    )
}

export default NavSlider