import { contacts } from '@/data/contacts';

const Contact = () => {
  return (
    <div className='mt-8'>
      <div className='text-md font-bold leading-6 mb-4'>Contact us</div>
      <div className='flex flex-col gap-3'>
        {contacts.map((contact) => {
          return (
            <div key={contact.value} className='flex align-middle gap-2 '>
              <div className='flex items-center'>{contact.icon}</div>
              <div className='flex items-center w-full text-sm'>
                {contact.isLink ? (
                  <a href={`mailto:${contact.value}`}>{contact.value}</a>
                ) : (
                  contact.value
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
