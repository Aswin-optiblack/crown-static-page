/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCategories } from "@/hooks/useCategories";
import { usePrompts } from "@/hooks/usePrompts";
import { useCrownMe } from "@/hooks/useCrownMe";
import { CompleteIPData } from "@/utils/ipDetection";
import SuccessModal from "@/components/SuccessModal";
import Toast from "@/components/Toast";
import { ArrowLeft } from "lucide-react";

interface CrownPersonalizationProps {
  userName?: string;
  fullName?: string;
  completeIPData?: CompleteIPData | null;
  onSuccess?: () => void;
  onBack?: () => void;
}

export default function CrownPersonalization({ userName, fullName, completeIPData, onSuccess, onBack }: CrownPersonalizationProps) {
  const [selectedCard, setSelectedCard] = useState(0);
  const [isCardViewOn, setIsCardViewOn] = useState(false);
  const [selectedPromptId, setSelectedPromptId] = useState<string>("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [currentPromptId, setCurrentPromptId] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Custom hooks for API data
  const { categories, loading: loadingCategories, error: categoriesError } = useCategories();
  const {
    currentPrompt,
    prompts,
    loading: loadingPrompts,
    error: promptsError,
    fetchPrompts,
    shufflePrompt,
    getCurrentPromptId,
    setCurrentPromptManually
  } = usePrompts();
  
  const { sendCrown, loading: sendingCrown, error: crownError, success: crownSuccess } = useCrownMe();

  // Handle card click
  const handleCardClick = (index: number, categoryId: string) => {
    setSelectedCard(index);
    setSelectedCategoryId(categoryId);
    setSelectedPromptId(""); // Reset selected prompt when changing category
    fetchPrompts(categoryId);
  };

  // Auto-select first category when categories are loaded
  useEffect(() => {
    if (categories.length > 0 && selectedCard === 0) {
      setSelectedCategoryId(categories[0]._id);
      fetchPrompts(categories[0]._id);
    }
  }, [categories, fetchPrompts, selectedCard]);

  // Handle Send button click
  const handleSendCrown = async () => {
    // Reset previous error state
    setShowErrorToast(false);
    setErrorMessage("");

    if (!userName) {
      setErrorMessage('No username provided');
      setShowErrorToast(true);
      return;
    }

    // Get prompt ID based on current view mode
    const promptId = isCardViewOn ? selectedPromptId : getCurrentPromptId();
    if (!selectedCategoryId || !promptId) {
      setErrorMessage('Please select a category and prompt');
      setShowErrorToast(true);
      return;
    }

    try {
      await sendCrown({
        category: selectedCategoryId,
        prompt: promptId,
        userName: userName
      }, completeIPData);
      if (onSuccess) {
        onSuccess();
      } else {
        setShowSuccessModal(true);
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send crown');
      setShowErrorToast(true);
    }
  };

  // Handle modal close
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Handle toast close
  const handleCloseErrorToast = () => {
    setShowErrorToast(false);
    setErrorMessage("");
  };

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9CA3AF;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6B7280;
        }
      `}</style>

      {/* Mobile Back Button - Above entire glass card */}
      {onBack && (
        <div className="flex justify-start mb-4 sm:hidden">
          <button
            onClick={onBack}
            className="w-[60px] h-[60px] cursor-pointer bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-200"
          >
            <ArrowLeft size={30} color="white" />
          </button>
        </div>
      )}

    <section
      className="relative py-8 sm:py-16 flex flex-col gap-5 px-4 sm:px-6 md:px-10 rounded-3xl  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/background-2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-3xl"></div>
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-5">
      <div className="text-center mx-auto flex flex-col items-center mb-5 relative">
        {/* Desktop Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="hidden sm:flex absolute left-0 top-4 w-[60px] h-[60px] cursor-pointer bg-black/30 backdrop-blur-sm rounded-full items-center justify-center hover:bg-black/70 transition-all duration-200"
          >
            <ArrowLeft size={30} color="white" />
          </button>
        )}

        <h2 className="block text-2xl sm:text-3xl lg:text-[42px] font-[700] font-jakarta text-white py-4">
          Pick a Crown & Make It Personal ✨
        </h2>
        <p className="text-white text-lg sm:text-xl lg:text-[30px] font-sans w-[95%] sm:w-[85%] lg:w-[75%] text-center">
          Celebrate [{fullName ? fullName : userName ? userName : "sender's name"}] right! Pick a category & prompt (or shuffle) to make their crown shine.
        </p>
      </div>
      <div 
        className="overflow-x-scroll pb-2 custom-scrollbar" 
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#9CA3AF transparent',
        }}
      >
        <div className="flex flex-row gap-2 sm:gap-4 text-lg sm:text-xl lg:text-[30px] mx-auto min-w-0" >
          {loadingCategories ? (
            // Loading skeleton for categories
            Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index}
                className="h-[120px] sm:h-[135px] lg:h-[150px] w-[100px] sm:w-[120px] lg:w-[140px] xl:w-[160px] flex-shrink-0 rounded-[20px] sm:rounded-[28px] lg:rounded-[35px] shadow-md flex flex-col items-center justify-center animate-pulse bg-gray-200"
              >
                <div className="w-8 h-8 bg-gray-300 rounded mb-2"></div>
                <div className="w-16 h-4 bg-gray-300 rounded"></div>
              </div>
            ))
          ) : categoriesError ? (
            <div className="flex items-center justify-center p-4 text-red-600 bg-red-50 rounded-lg w-full">
              <p>Error loading categories: {categoriesError}</p>
            </div>
          ) : (
            categories.map((category, index) => (
              <div 
                key={category._id}
                onClick={() => handleCardClick(index, category._id)}
                className={`sm:h-[135px] lg:h-[150px] w-[100px] sm:w-[120px] lg:w-[140px] xl:w-auto flex-shrink-0 rounded-[20px] sm:rounded-[28px] lg:rounded-[35px] shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-200 relative`}
                style={{
                  background: selectedCard === index 
                    ? `linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(145.96deg, rgba(255, 206, 0, 0.04) -7.2%, rgba(239, 37, 138, 0.04) 51.64%, rgba(118, 80, 255, 0.04) 118.33%), linear-gradient(0deg, #FFFAF1, #FFFAF1), linear-gradient(145.96deg, rgba(255, 206, 0, 0.08) -7.2%, rgba(239, 37, 138, 0.08) 51.64%, rgba(118, 80, 255, 0.08) 118.33%)`
                    : '#ffffff',
                  border: selectedCard === index ? '6px solid transparent' : 'none',
                  backgroundImage: selectedCard === index ? 'linear-gradient(white, white), linear-gradient(93.04deg, rgba(112, 36, 180, 0.8) 12.7%, rgba(248, 168, 13, 0.8) 108.9%)' : 'none',
                  backgroundOrigin: selectedCard === index ? 'border-box' : 'initial',
                  backgroundClip: selectedCard === index ? 'content-box, border-box' : 'initial'
                }}
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-3 p-2 py-10 px-12 ">
                  <p>{category.emoji}</p>
                  <p className="text-center text-sm sm:text-xl lg:text-2xl leading-tight">{category.name}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center justify-center my-5 mx-auto">
        <div className="flex items-center gap-4 self-end">
          <h4 className="text-white text-lg sm:text-xl lg:text-[30px]">Card view</h4>
          <div
            onClick={() => {
              setIsCardViewOn(!isCardViewOn);
              // Reset selected prompt when toggling views
              setSelectedPromptId("");
            }}
            className={`w-[70px] sm:w-[80px] lg:w-[90px] h-[35px] sm:h-[40px] lg:h-[45px] rounded-full cursor-pointer flex items-center p-1 transition-all duration-300 ${
              isCardViewOn ? 'bg-[#AE93C8] justify-end' : 'bg-gray-300 justify-start'
            }`}
          >
            <div className="w-[27px] sm:w-[32px] lg:w-[37px] h-[27px] sm:h-[32px] lg:h-[37px] bg-white rounded-full shadow-md"></div>
          </div>
        </div>
{!isCardViewOn ? (
          <div
            className="rounded-4xl flex flex-col items-center justify-center gap-4 relative w-full min-w-[280px] max-w-[320px] sm:min-w-[400px] sm:max-w-[480px] lg:min-w-[500px] lg:max-w-[600px] xl:min-w-[600px] xl:max-w-[720px]"
            style={{
              border: '6px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(93.04deg, rgba(112, 36, 180, 0.8) 12.7%, rgba(248, 168, 13, 0.8) 108.9%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box'
            }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-28 flex flex-col items-center justify-center gap-4 w-full h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[250px]">
              {loadingPrompts ? (
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#583A73]"></div>
                  <div className="w-48 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ) : promptsError ? (
                <div className="text-center text-red-600">
                  <p className="font-sans font-[700] text-lg">Error: {promptsError}</p>
                </div>
              ) : (
                <p className="text-[#2C1D39] font-sans font-[700] text-xl sm:text-2xl lg:text-4xl text-center leading-relaxed break-words hyphens-auto">
                  {currentPrompt || "Select a category to see prompts"}
                </p>
              )}

              <button
                onClick={shufflePrompt}
                disabled={loadingPrompts || !currentPrompt}
                className="my-5 cursor-pointer flex gap-2 sm:gap-4 font-sans font-[700] text-lg sm:text-xl lg:text-2xl rounded-full items-center justify-center py-3 sm:py-4 px-6 sm:px-8 lg:px-12 text-white bg-gradient-to-r from-[#8459AB] to-[#583A73] w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🎲 Shuffle Prompt
                <Image
                  src="/assets/refresh.svg"
                  alt="Refresh Icon"
                  width={20}
                  height={20}
                  className="sm:w-[25px] sm:h-[25px] filter brightness-0 invert"
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full min-w-[280px] max-w-[320px] sm:min-w-[400px] sm:max-w-[480px] lg:min-w-[500px] lg:max-w-[600px] xl:min-w-[600px] xl:max-w-[720px] px-4">
            {loadingPrompts ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#583A73]"></div>
                <p className="text-[#2C1D39]">Loading prompts...</p>
              </div>
            ) : promptsError ? (
              <div className="text-center text-red-600">
                <p className="font-sans font-[700] text-lg">Error: {promptsError}</p>
              </div>
            ) : prompts.length === 0 ? (
              <div className="text-center">
                <p className="text-[#2C1D39] font-sans font-[700] text-xl">Select a category to see prompts</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {prompts.map((prompt) => (
                  <div
                    key={prompt._id}
                    onClick={() => {
                      setSelectedPromptId(prompt._id);
                      setCurrentPromptManually(prompt._id, prompt.content);
                    }}
                    className="cursor-pointer transition-all duration-300 rounded-[32px] relative"
                    style={{
                      padding: selectedPromptId === prompt._id ? '4px' : '0px',
                      background: selectedPromptId === prompt._id
                        ? 'linear-gradient(93.04deg, rgba(112, 36, 180, 0.8) 12.7%, rgba(248, 168, 13, 0.8) 108.9%)'
                        : 'transparent'
                    }}
                  >
                    <div
                      className="rounded-[32px] p-6 h-full flex items-center justify-center"
                      style={{
                        background: selectedPromptId === prompt._id
                          ? 'linear-gradient(to bottom, #FFFAF1, #F5F0E8, #FFFFFF)'
                          : '#FFFFFF'
                      }}
                    >
                      <p className="font-sans font-[600] text-sm sm:text-base leading-relaxed break-words text-center text-[#2C1D39]">
                        {prompt.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="w-full max-w-md">
          <button
            onClick={handleSendCrown}
            disabled={sendingCrown || !userName || !selectedCategoryId || !(isCardViewOn ? selectedPromptId : getCurrentPromptId())}
            className="my-8 w-full max-w-md font-[800] text-2xl bg-gradient-to-r from-[#7024B4] to-[#F8A80D] text-white font-jakarta rounded-full p-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex w-full items-center justify-center cursor-pointer hover:opacity-90 transition-all bg-gradient-to-tl from-purple-600 via-[#EF258A] to-orange-400 text-white rounded-full max-w-md px-16 py-4">
              {sendingCrown ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                'Send'
              )}
            </span>
          </button>
        </div>
      </div>
      </div>
    </section>

    {/* Success Modal */}
    <SuccessModal 
      isOpen={showSuccessModal} 
      onClose={handleCloseSuccessModal} 
      userName={fullName}
    />

    {/* Error Toast */}
    <Toast
      message={errorMessage}
      type="error"
      isVisible={showErrorToast}
      onClose={handleCloseErrorToast}
    />
    </>
  );
}
