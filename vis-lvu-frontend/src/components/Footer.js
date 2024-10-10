import { Chatbot } from './index';
import './Footer.css'
export const Footer = () => {
  return (
    <>
    <Chatbot />
    <div className="row bordertop">
        <span>Powered by <a className="card-link" href="https://react.dev/">React.js</a></span>
    </div>
    </>
  )
}