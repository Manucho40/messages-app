import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { Attributes } from '../types';


const ModalWindow = () => {
    const [open, setOpen] = useState(false);
    const [newMessage, setNewMessage] = useState<Attributes>({
      auteur: "",
      texte: ""
    })
    const [form] = Form.useForm();


    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const name = event.target.name;
        setNewMessage((newMessage) => ({
          ...newMessage,
            [name]: event.target.value,
        }));
    }
    const onFinish = (newMessage: Attributes) => {
      const API: string | undefined = process.env.REACT_APP_REMOTE_API_URL;
      if(API){
       axios.post(API, newMessage);
       
      }else{
        console.log("Vide")
      }
      onReset()
      setOpen(false)
      };
    
      const onReset= () => {
        setNewMessage({auteur: "", texte: ""});
        form.resetFields();
      };


    return ( 
        <>
            <div>
                <Button className='m-5' type="default" onClick={() => setOpen(true)}>
                    New Message
                </Button>
            </div>
            <Modal
                    title="Modal 1000px width"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => {setOpen(false); onReset()}}
                    width={900}
                    footer={null}
            >
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="auteur" value={newMessage.auteur} onChange={handleInput}/>
      </Form.Item>

      <Form.Item name={['user', 'Message']} label="Message" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input name="texte" value={newMessage.texte} onChange={handleInput}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Enregistrer
        </Button>
      </Form.Item>
    </Form>          
    
 </Modal>
        </>
     );
}
 
export default ModalWindow;