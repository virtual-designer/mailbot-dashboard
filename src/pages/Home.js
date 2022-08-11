import MailBotLogo from '../assets/mailbot.png';
import BottomBar from '../components/BottomBar';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';

export default function Home() {
    const footerLinks = [
        {
            url: "https://github.com/virtual-designer/mailbot",
            outside: true,
            text: "GitHub"
        },
        {
            url: "https://discord.gg/892GWhTzgs",
            outside: true,
            text: "Discord"
        }
    ];

    return (
        <>
            <div className="md:grid md:grid-cols-2 md:gap-10 w-100 pb-10 md:pb-0">
                <div className="md:order-2 md:flex md:items-center md:justify-center">
                    <img src={MailBotLogo} alt="Logo" className="w-100 md:w-[80%] md:shadow-lg rounded" />
                </div>
                <div className="md:mt-[100px] px-4">
                    <h1 className="text-3xl md:text-4xl text-center"><span className='text-blue-500'>Enrich</span> private communication between <span className="text-blue-500">Discord Server Staff</span> and <span className="text-blue-500">Members</span>.</h1>
                    <p className='md:text-lg pt-4 md:px-6'>MailBot is a simple, private and easy way for communication between server staff and members. It also has an web based control panel where you can manage settings and thread conversations.</p>
                    <br />
                    <div className='md:px-6 block'>
                        <Button className='px-10 py-3 block md:inline-block text-center' href="https://github.com/virtual-designer/mailbot/archive/refs/heads/main.zip">
                            <span>Download</span>
                            <span className='text-xs block'>Source Code</span>
                        </Button>
                        <br className='mobile' />
                        <ButtonLink className='px-8 py-3 md:ml-5 block md:inline-block text-center' to="/login">
                            <span>Control Panel</span>
                            <span className='text-xs block'>Login</span>
                        </ButtonLink>
                    </div>

                    <br />
                    <div className='flex justify-center'>
                        <div className='w-[95%]'>
                            <h2 className='text-2xl md:text-3xl pt-7'>Features</h2>

                            <ul className='ml-10 mt-3'>
                                <li className='list-item list-disc'>Simple and Complex Tools</li>
                                <li className='list-item list-disc'>Web Control Panel Support</li>
                                <li className='list-item list-disc'>REST API Support</li>
                                <li className='list-item list-disc'>Rich Messaging</li>
                                <li className='list-item list-disc'>Customizable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="md:ml-10 pb-6 md:pb-0">
                <BottomBar data={footerLinks} />
            </div>
        </>
    );
}