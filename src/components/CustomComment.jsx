import { Avatar,  Button,  Input,  } from 'antd';
const { TextArea } = Input;
import  { useState } from 'react';
const CustomComment = ({ author, content, datetime, file }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [edContent, setEdContent] = useState(content)
    const initials = author
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase();

    const handleEdit = (value) => {
        setIsEdit(true)
    }

    function handleCancel() {
        setIsEdit(false)
    }
    function handleSave() {
         setIsEdit(false)
    }
    return (
        <div className='!flex !mb-[16px] py-0.5 mt-3 ml-2 border-b max-w-[100%] border-gray-200'>
            <Avatar className='!shrink-0 !text-md !bg-[#f56a00]'>{initials}</Avatar>
            <div className='!ml-[12px] flex-1'>
                <div className='!font-bold'>{author}</div>
                {
                    isEdit ? (
                        <TextArea
                            className='!max-w-[95%]'
                            value={edContent}
                            onChange={(e) => setEdContent(e.target.value)} // Update content state
                            rows={4}
                            autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                    ) : (
                        <div className='text-justify'>{content}</div>
                    )
                }
                {file && (
                    <img
                        src={URL.createObjectURL(file.originFileObj)}
                        alt="preview"
                        style={{ maxWidth: '100%', maxHeight: '200px', marginTop: 8 }}
                    />
                )}
                <div className='!font-light !text-[#999] mb-1'>{datetime}</div>
            </div>
            <div className='flex items-start !gap-2'>
                {isEdit ? (
                    <>
                        <Button ghost={true}
                            type='text'
                            onClick={handleSave}
                            className='!text-gray-400 !font-medium !text-xs hover:!text-blue-500'
                        >
                            Save
                        </Button>
                        <Button
                            type='text'
                            onClick={handleCancel}
                            className='!text-gray-400 !font-medium !text-xs hover:!text-red-500'
                        >
                            Cancel
                        </Button>
                    </>
                ) : (<>
                    <Button
                        type='text'
                        onClick={handleEdit}
                        className='!text-gray-400 !font-medium !text-xs hover:!text-blue-500'
                    >
                        Edit
                    </Button>
                    <Button
                        type='text'
                        className='!text-gray-400 !font-medium !text-xs hover:!text-red-500'
                    >
                        Delete
                    </Button></>


                )}

            </div>
        </div>
    )
};

export default CustomComment